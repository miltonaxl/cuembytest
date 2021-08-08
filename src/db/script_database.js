const axios = require('axios').default

const { MongoClient } = require('mongodb');


const main = async()=>{
    const client =new MongoClient(`mongodb+srv://abby:abby2021@cluster0.pl2dr.mongodb.net/cuembytest?retryWrites=true&w=majority`)

    try {

    await client.connect();

    const teams = await axios.get('https://www.easports.com/fifa/ultimate-team/api/fut/item').then( d => d.data);

    for (const item of teams.items) {
        await client.db().collection('teams').insertOne({
            name: item.firstName.concat(' ').concat(item.lastName),
            position: item.position,
            nation: item.nation.name,
            team:item.club.name

        })
    }
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }

    
}




main()