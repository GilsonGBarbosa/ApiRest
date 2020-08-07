import express from 'express'
import create from './services/create'
import remove from './services/remove'
import list from './services/list'

const router = express.Router()

router.get('/', list)
//localhost:3000/bills/
router.post('/', create)
router.delete('/:id', remove)

export default router