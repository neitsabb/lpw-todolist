export default class Task {
  constructor(title, description, status = "todo") {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.status = status;
  }

  toggleStatus() {
    this.status = this.status === "todo" ? "done" : "todo";
  }
}
