const router = require('express').Router()
const Accounts = require('./accounts-model.js')
const mw = require("./accounts-middleware.js")

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Accounts.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }

})

router.get('/:id', mw.checkAccountId, (req, res) => {
  // DO YOUR MAGIC
  res.status(200).json(req.accounts)
})

router.post('/', mw.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const newAccount = await Accounts.create(req.body)
    res.status(201).json(newAccount)
  }catch(err){
    next(err)
  }
})

router.put('/:id', mw.checkAccountId, mw.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const updatedAccount = await Accounts.updateById(req.params.id, req.body)
    res.status(200).json(updatedAccount)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', mw.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const deletedAccount = await Accounts.remove(req.params.id)
    req.json(deletedAccount)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
