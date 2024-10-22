import Component from "../Component";

export default class Listing extends Component {
  constructor({ tasks }) {
    super({
      element: "#tasks",
    });
    this.tasks = tasks;

    this.renderComponent();
  }

  renderComponent() {
    this.element.innerHTML = "";

    const ulElement = document.createElement("ul");
    ulElement;

    this.tasks.forEach((task) => {
      const div = document.createElement("div");
      new TaskItem(task, div);

      ulElement.appendChild(div);
    });

    this.element.appendChild(ulElement);
  }
}

class TaskItem {
  constructor(item, container) {
    this.item = item;
    this.container = container;

    this.render();

    this.container.addEventListener("click", () => {
      this.click();
    });
  }

  render() {
    return (this.container.innerHTML = `
      <input class="hidden" type="checkbox" id="task_${this.item.id}" ${
      this.item.status === "done" ? "checked" : ""
    }>
      <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for="task_${
        this.item.id
      }">
        <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full ">
          <svg class="w-4 h-4 ${
            this.item.status == "done" ? "fill-green-400" : ""
          }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </span>
        <span class="ml-4 text-sm">${this.item.title}</span>
      </label>	
    `);
  }

  click() {
    this.item.toggleStatus();
    this.render();
  }
}
