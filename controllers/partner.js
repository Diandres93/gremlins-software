import express from 'express'
import { PartnerModel } from '../models/PartnerModel.js'
// import verify from '../auth/verification.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const partners = await PartnerModel.find()

    return res.json(partners)
  } catch (error) {
    return res.status(500).json({ message: 'error looking for partners', error })
  }
})
router.post('/partnerId', async (req, res) => {
  try {
    /* const partner = await PartnerModel.findOne({
      documentType: req.params.documentType,
      partnerId: req.params.partnerId
    }) */
    const partner = await PartnerModel.findOne(req.body)
    return res.json(partner)
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error looking for id ${req.params.id}`, error })
  }
})

router.post('/register', async (req, res) => {
  try {
    const partner = new PartnerModel(req.body)

    const data = await partner.save()

    return res.json(data)
  } catch (error) {
    console.log(error)
    if (error.code === 11000) return res.status(500).json({ message: 'partner already registered' })

    return res.status(400).json({ message: 'error registering data', error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await PartnerModel.deleteOne({ _id: req.params.id })
    return res.json(result)
  } catch (error) {
    res.status(500).json({ message: `error deleting id ${req.params.id}`, error })
  }
})

export const partnerController = router
