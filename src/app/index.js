import Listing from "./components/Listing";
import Task from "./core/Task";

export default class Application {
  static instance;

  constructor() {
    if (Application.instance) {
      return Application.instance;
    }

    Application.instance = this;
  }

  initialize() {
    this.tasks = [
      new Task("Task 1", "Description 1"),
      new Task("Task 2", "Description 2"),
    ];

    this.createComponents();
  }

  createComponents() {
    this.listing = new Listing({
      tasks: this.tasks,
    });
  }
}
