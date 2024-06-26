import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  template: `
  <main>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li>
          <p>🏠</p>
        </li>
        <li class="breadcrumb-item" *ngFor="let breadcrumb of breadcrumbs">
          <a [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</a>
        </li>
      </ol>
    </nav>
  </main>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.snapshot.root);
    });
  }

  createBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRouteSnapshot[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if (child.data['breadcrumb']) {
        breadcrumbs.push({
          label: child.data['breadcrumb'],
          url: url
        });
      }

      this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
