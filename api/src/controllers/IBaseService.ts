export default interface IBaseService {

  create(data: any): any;

  get(): any;

  getOne(identifier: any): any;

  edit(identifier: any): any;

  update(identifier: any): any;

  delete(identifier: any): any;
}
