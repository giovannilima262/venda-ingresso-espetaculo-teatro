import { Request, Response } from "express";
import { getManager } from "typeorm";
import { ShowArmchair } from "../entity/show_armchair.entity";

export async function getById(request: Request, response: Response) {
  const repository = getManager().getRepository(ShowArmchair);

  const post = await repository.findOne(request.params.id);

  if (!post) {
    response.status(404);
    response.end();
    return;
  }

  response.send(post);
}

export async function update(request: Request, response: Response) {
  const repository = getManager().getRepository(ShowArmchair);
  const value = await repository.findOne(request.params.id);

  if (!value) {
    response.status(404);
    response.end();
    return;
  }
  await repository.update({ id: Number(request.params.id) }, request.body);

  response.send(value);
}

export async function remove(request: Request, response: Response) {
  await getManager().getRepository(ShowArmchair).delete(request.params.id);
  response.status(200);
  response.end();
}

export async function getAll(request: Request, response: Response) {
  response.send(await getManager().getRepository(ShowArmchair).find());
}

export async function save(request: Request, response: Response) {
  const repository = getManager().getRepository(ShowArmchair);
  const newValue = repository.create(request.body);
  await repository.save(newValue);
  response.send(newValue);
}
