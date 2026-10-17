
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
})
export class TodoComponent {
  newTask = '';

  private router = inject(Router);
  private storageKey = 'todoTasks';

  tasks: Task[] = this.loadTasks();

  private loadTasks(): Task[] {
    const savedTasks = localStorage.getItem(this.storageKey);

    if (savedTasks !== null) {
      try {
        const parsed = JSON.parse(savedTasks);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      } catch {
        console.error('Could not read saved tasks.');
      }
    }

    return [
      { title: 'Working call', completed: false },
      { title: 'Meet with doctor', completed: false },
      { title: 'Go to the shop', completed: true },
      { title: 'Take the kids to school', completed: true },
      { title: 'Finish mobile mockups', completed: false },
      { title: 'Walk with dog', completed: false },
    ];
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  addTask(): void {
    const title = this.newTask.trim();

    if (!title) {
      return;
    }

    this.tasks.unshift({
      title,
      completed: false
    });

    this.newTask = '';
    this.saveTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(item => item !== task);
    this.saveTasks();
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
    this.saveTasks();
  }

  logout(): void {
    this.router.navigateByUrl('/');
  }
}
