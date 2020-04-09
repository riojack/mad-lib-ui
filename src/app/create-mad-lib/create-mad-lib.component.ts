import { Component, OnInit } from '@angular/core';
import { MadLibService } from '../mad-lib.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-mad-lib',
  templateUrl: './create-mad-lib.component.html',
  styleUrls: ['./create-mad-lib.component.scss']
})
export class CreateMadLibComponent implements OnInit {

  madLibFormControl: FormControl;

  constructor(private madLibService: MadLibService) { }

  ngOnInit(): void {
    this.madLibFormControl = new FormControl('');
  }

  onSave(): void {
    this.madLibService.saveMadLib(this.madLibFormControl.value);
  }

}
