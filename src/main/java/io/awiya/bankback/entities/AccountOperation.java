package io.awiya.bankback.entities;

import io.awiya.bankback.enums.OperationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountOperation {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private Date operationDate;
    private double amount;
    private String description;

    @Enumerated(STRING)
    private OperationType type;

    @ManyToOne
    private BankAccount bankAccount;
}

