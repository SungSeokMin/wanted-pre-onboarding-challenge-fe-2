interface Todo {
  postId: number;
  content: string;
  category: string;
  tags?: string[];
  isComplete: boolean;
}

class TodoData implements Todo {
  postId: number;
  content: string;
  category: string;
  tags?: string[];
  isComplete: boolean;

  constructor({ postId, content, category, tags, isComplete }: Todo) {
    this.postId = postId;
    this.content = content;
    this.category = category;
    this.tags = tags;
    this.isComplete = isComplete;
  }
}

class Todos {
  onCreate(): void {}
  onGet(): void {}
  onGetById(): void {}
  onUpdateTodo(): void {}
  onUpdateTags(): void {}
  onRemoveById(): void {}
  onRemoveAll(): void {}
  onRemoveTags(): void {}
}

const myTodos = new Todos();
console.log(myTodos);
