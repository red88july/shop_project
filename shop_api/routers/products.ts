import {Router} from 'express';
import {Product, ProductWithoutId} from "../types";
import fileDB from "../fileDB";
const productsRouter = Router();

const products:Product[] = [];

productsRouter.get('/', async (req,res) => {
    const products = await fileDB.getItems();
    res.send(products );
});

productsRouter.get('/:id', async (req, res) => {
    const products = await fileDB.getItems();
    const product = products.find(p => p.id === req.params.id);
    res.send(product);
});

productsRouter.post('/', async (req,res)=> {
    console.log(req.body);

    const product: ProductWithoutId = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    }

  const newProduct = await fileDB.addItem(product);
    res.send(newProduct);
});

export default productsRouter;
