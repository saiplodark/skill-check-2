module.exports = {
    getInventory:(req, res, next)=>{
        const db = req.app.get('db');
        db.get_inventory()
        .then(shelfie => res.status(200).send(shelfie))
        .catch(err => console.log(err))
    },

    addInventory:(req, res, next)=>{
        const db =req.app.get('db');
        const{name, price, img} = req.body
        db.add_inventory([name, price, img])
        .then(()=> res.sendStatus(200))
        .catch(err => console.log(err))
    },
}

