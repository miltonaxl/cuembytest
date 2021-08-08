import { InTeam } from "./refactory/InTeam";
import { countDocumentTeam, getByNameSearch, getByTeamName } from "./refactory/team";
import { teamDTO } from "./refactory/teamDto";

interface result{
    page:number;
    totalPages:number;
    items:number;
    totalItems:number;
    players:InTeam[]
}




export const getPlayerByTeam = async (payload: teamDTO) :Promise<result | any>=>{



    const nameByTeam = payload?.name ?  payload?.name.toLowerCase() : '';


    const items = await countDocumentTeam({ team : { $regex : nameByTeam, $options :"i"}});

    const [limit, skip] = paginationLimitSkip(items, payload.page);

    const teams = await getByTeamName({ team : { $regex : nameByTeam, $options :"i"}}, limit, skip);

    return {
        page: payload.page,
        totalPage:Math.ceil(items / 10),
        items:teams.length,
        totalItems:items,
        players:teams
    }
}

export const searchByName = async (keyword:string, page:number ):Promise<result | any> =>{


    const searchMethod = { name : { $regex : keyword, $options :"i"}}
    const items = await countDocumentTeam(searchMethod);
    console.log()
    const [limit, skip] = paginationLimitSkip(items, page);

    const searchResult = await getByNameSearch(searchMethod,limit, skip);

    
    return {
        page: page,
        totalPage:Math.ceil(items / 10),
        items:searchResult.length,
        totalItems:items,
        players:searchResult
    }
}



const paginationLimitSkip = (items:number, page:number )=>  [Math.ceil(items / 10) === page ? 10 - ((10 * page)-items ) : 10*page , page > 1 ? 10 * (page -1) : 0 ];