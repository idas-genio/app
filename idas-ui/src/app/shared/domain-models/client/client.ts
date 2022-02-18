import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
import { ContactDetail } from '../user/contact-detail';
export class Client extends BaseModel {
  SalutationId: number;
  Surname: string;
  CompanyName: string;
  IndustryTypeId: number;
  IdNumber: number;
  RegistrationNumber: string;
  VATNumber: number;
  Salutation: LookupValue;
  IndustryType: LookupValue;
  ContactDetail: ContactDetail;

  constructor(
    id: number,
    IsActive: boolean,
    SalutationId?: number,
    Name?: string,
    Surname?: string,
    CompanyName?: string,
    IndustryTypeId?: number,
    IdNumber?: number,
    RegistrationNumber?: string,
    VATNumber?: number,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date){
    super(id, IsActive, null, Name, null, CreatedBy, DateCreated, ModifiedBy, DateModified);
      this.SalutationId = SalutationId;
      this.Surname = Surname;
      this.CompanyName = CompanyName;
      this.IndustryTypeId = IndustryTypeId;
      this.IdNumber = IdNumber;
      this.RegistrationNumber = RegistrationNumber;
      this.VATNumber = VATNumber;
    }
}
