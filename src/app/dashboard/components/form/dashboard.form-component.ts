import { Component, ViewEncapsulation } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'form-component',
  templateUrl: './dashboard.form-component.html',
  styleUrls: ['./dashboard.form-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardFormComponent {
  title = 'bank-open-comp';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2500000;
  min = 5000;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  expenseValue =0;
  loanValue=0;
  vertical = false;
  tickInterval = 1;
  isChecked = true;
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: '6 months'},
    {value: 'pizza-1', viewValue: '12 months'},
    {value: 'tacos-2', viewValue: '18 months'}
  ];


  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
