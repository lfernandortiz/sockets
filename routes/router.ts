import { Router, Request, Response } from 'express'


const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({
        ok: true,
        mensaje: 'todo esta bien!!'
    })
});
router.get('/mensajes/:id', (req: Request, res: Response) => {
    console.log(req.body)
    console.log(req.params)
    res.json({
        ok: true,
        mensaje: 'todo esta bien!!'
    })
});


router.post('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'todo esta bien en POST HTTP!!'
    })
});


export default router;