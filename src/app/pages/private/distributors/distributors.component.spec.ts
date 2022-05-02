import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { DistributorsService } from 'src/app/services/distributors.service';
import { DistributorsComponent } from './distributors.component';
import { PrivateRoutingModule } from '../private-routing.module';
import { PrivateComponentsModule } from '../private-components.module';
import { DistributorsServiceMock } from '../../../__mocks__/DistributorsService';

describe('DistributorsComponent', () => {
  let component: DistributorsComponent;
  let fixture: ComponentFixture<DistributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistributorsComponent],
      providers: [{ provide: DistributorsService, useClass: DistributorsServiceMock }],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        PrivateRoutingModule,
        TranslocoModule,
        PrivateComponentsModule,
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get one distributor', () => {
    expect(component.distributors.length).toBe(1);
  });
});
