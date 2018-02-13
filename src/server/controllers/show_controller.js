let shows = [];
let id = 0;

module.exports = {
    create: (req, res) =>{
        const {show} = req.body;
        console.log(shows)
        // if(shows.filter(a => a.name===show.name).length){
        //     res.status(200).send(shows)
        // }else{

            shows.push({id, show});
            id++;
            res.status(200).send(shows)
        // }

    },
    read: (req, res) =>{
        res.status(200).send(shows);

    },
    update: (req, res) =>{
        let {show} = req.body;
        const updateID = req.params.id;
        const showIndex = shows.findIndex(show => show.id == updateID);
        let theShow = shows[showIndex];

        shows [showIndex] = {
            id: show.id,
            show: show || show.text,
           
        }
        res.status(200).send(shows)

    },
    delete: (req, res) =>{
        const deleteID = req.params.id;
        showIndex = shows.findIndex( show => show.id == deleteID);
        shows.splice(showIndex, 1);
        res.status(200).send(shows);

    }
}
