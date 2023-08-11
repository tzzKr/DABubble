import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BubbleService {


  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<BubbleService>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<BubbleService> {
    return this.tutorialsRef;
  }

  create(tutorial: BubbleService): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
