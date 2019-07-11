import {AddressInterface} from './address.interface';
import {PhoneIntreface} from './phone.intreface';

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  address: AddressInterface;
  email: string;
  phone: PhoneIntreface;
  description: string;
}
