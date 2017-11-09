import express from 'express';
import userController from './user.controller';

export const userRouter = express.Router();

userRouter.param('id', userController.findByParam);

// /user
userRouter
  .route('/')
  .get(userController.getAll)
  .post(userController.createOne);

// /user/:id
userRouter
  .route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);
