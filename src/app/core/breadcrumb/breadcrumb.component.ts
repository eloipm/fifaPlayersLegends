import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { BreadcrumbModule } from 'primeng/breadcrumb';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})

export class BreadcrumbComponent {

  breadcrumbs: Breadcrumb[] = [];
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.snapshot.root);
    });
  }

  createBreadcrumbs(route: any, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: any = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url.map((segment: any) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({
        label: child.data.breadcrumb,
        url: url
      });

      // Llamada recursiva para cada hijo, pero no retorna hasta procesar todos los hijos
      this.createBreadcrumbs(child, url, breadcrumbs);
    }

    console.log(breadcrumbs);

    return breadcrumbs;
  }
}