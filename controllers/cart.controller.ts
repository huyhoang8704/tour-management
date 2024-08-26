import express , { Express , Request , Response } from "express";

const index = async (req : Request, res : Response) => {
    res.render('client/pages/cart/index' , {
        pageTitle : "Giỏ hàng",
    })
}

export = {
    index
}