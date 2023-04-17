package io.awiya.bankback.web;

import io.awiya.bankback.dtos.*;
import io.awiya.bankback.exceptions.BalanceNotSufficientException;
import io.awiya.bankback.exceptions.BankAccountNotFoundException;
import io.awiya.bankback.services.BankAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
@RequiredArgsConstructor
public class BankAccountRestAPI {


    private final BankAccountService bankAccountService;

    @GetMapping("/{accountId}")
    public BankAccountDTO getBankAccount(@PathVariable String accountId) {
        return bankAccountService.getBankAccount(accountId);
    }

    @GetMapping
    public List<BankAccountDTO> listAccounts() {
        return bankAccountService.bankAccountList();
    }

    @GetMapping("/{accountId}/operations")
    public List<AccountOperationDTO> getHistory(@PathVariable String accountId) {
        return bankAccountService.accountHistory(accountId);
    }

    @GetMapping("/{accountId}/pageOperations")
    public AccountHistoryDTO getAccountHistory(
            @PathVariable String accountId,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "5") int size){
        return bankAccountService.getAccountHistory(accountId, page, size);
    }

    @PostMapping("/debit")
    public DebitDTO debit(@RequestBody DebitDTO debitDTO){
        this.bankAccountService.debit(debitDTO.getAccountId(), debitDTO.getAmount(), debitDTO.getDescription());
        return debitDTO;
    }

    @PostMapping("/credit")
    public CreditDTO credit(@RequestBody CreditDTO creditDTO){
        this.bankAccountService.credit(creditDTO.getAccountId(), creditDTO.getAmount(), creditDTO.getDescription());
        return creditDTO;
    }

    @PostMapping("/transfer")
    public void transfer(@RequestBody TransferRequestDTO transferRequestDTO)  {
        this.bankAccountService.transfer(
                transferRequestDTO.getAccountSource(),
                transferRequestDTO.getAccountDestination(),
                transferRequestDTO.getAmount());
    }
}
