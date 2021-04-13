const Accounts = require("./accounts-model")

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {name, budget} = req.body
  if(name && budget){
    next()
  }else{
    res.status(400).json({message: "name and budget required"})
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const accounts = await Accounts.getById(req.params.id)
    if(accounts){
      req.accounts = accounts
      next()
    }else{
      res.status(404).json({message:" account not found"})
    }
  }catch(err){
    next(err)
  }
}
