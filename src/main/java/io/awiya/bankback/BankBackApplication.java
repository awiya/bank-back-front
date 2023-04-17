package io.awiya.bankback;

import io.awiya.bankback.dtos.BankAccountDTO;
import io.awiya.bankback.dtos.CurrentBankAccountDTO;
import io.awiya.bankback.dtos.CustomerDTO;
import io.awiya.bankback.dtos.SavingBankAccountDTO;
import io.awiya.bankback.exceptions.CustomerNotFoundException;
import io.awiya.bankback.services.BankAccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
public class BankBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankBackApplication.class, args);
    }


	CommandLineRunner commandLineRunner(BankAccountService bankAccountService){
		return args -> {
			Stream.of("AYOUB","JAD","JUDIA").forEach(name->{
				CustomerDTO customer=new CustomerDTO();
				customer.setName(name);
				customer.setEmail(name.toLowerCase()+"@gmail.com");
				bankAccountService.saveCustomer(customer);
			});
			bankAccountService.listCustomers().forEach(customer->{
				try {
					bankAccountService.saveCurrentBankAccount(Math.random()*9000,2000,customer.getId());
					bankAccountService.saveSavingBankAccount(Math.random()*12000,5.5,customer.getId());

				} catch (CustomerNotFoundException e) {
					e.printStackTrace();
				}
			});
			List<BankAccountDTO> bankAccounts = bankAccountService.bankAccountList();
			for (BankAccountDTO bankAccount:bankAccounts){
				for (int i = 0; i <10 ; i++) {
					String accountId;
					if(bankAccount instanceof SavingBankAccountDTO){
						accountId=((SavingBankAccountDTO) bankAccount).getId();
					} else{
						accountId=((CurrentBankAccountDTO) bankAccount).getId();
					}
					bankAccountService.credit(accountId,1000+Math.random()*12000,"Credit");
					bankAccountService.debit(accountId,100+Math.random()*900,"Debit");
				}
			}
		};
	}

}
