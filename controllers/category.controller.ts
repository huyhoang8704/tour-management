import express , { Express , Request , Response } from "express";
import Category from "../models/category.model";

const categories = async (req : Request, res : Response) => {
    // select * from categories where deleted = false and status = "active"
    const categories = await Category.findAll({
        where : {
            deleted : false,
            status : "active"
        },
        raw : true
    })
    res.render('client/pages/category/index' , {
        pageTitle : "Danh mục tour",
        categories : categories
    })
}

export = {
    categories
}