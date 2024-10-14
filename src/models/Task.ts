class Task_Item {
  cd: number;
  title: string;
  category: string;
  status: string;
  desc: string;

  constructor(
    cd: number,
    title: string,
    category: string,
    status: string,
    desc: string,
  ) {
    this.cd = cd;
    this.title = title;
    this.category = category;
    this.status = status;
    this.desc = desc;
  }
}

export default Task_Item;
