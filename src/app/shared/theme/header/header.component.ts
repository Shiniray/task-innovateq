import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getInitials(fullName: string): string {
    const names = fullName.split(' ');
    const initials = names.map((name) => name.charAt(0).toUpperCase());
    return initials.join('');
  }
}
