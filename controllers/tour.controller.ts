import express , { Express , Request , Response } from "express";
import Tour from "../models/tour.model";

const index = async (req : Request, res : Response) => {
    // select * from tours where deleted = false and status = "active"
    const tours = await Tour.findAll({
        where : {
            deleted : false,
            status : "active"
        },
        raw : true
    });
    res.render('client/pages/tour/index' , {
        pageTitle : "Danh sách tour du lịch",
        tours : tours
    })
}

export = {
    index
}