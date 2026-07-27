-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_iwallet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_iwallet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_iwallet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `db_iwallet` ;

-- -----------------------------------------------------
-- Table `db_iwallet`.`merchants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_iwallet`.`merchants` (
  `merchant_id` BIGINT NOT NULL AUTO_INCREMENT,
  `public_id` VARCHAR(36) NOT NULL,
  `merchant_name` VARCHAR(100) NOT NULL,
  `qr_code` TEXT NOT NULL,
  `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`merchant_id`),
  UNIQUE INDEX `public_id` (`public_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_iwallet`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_iwallet`.`users` (
  `user_id` BIGINT NOT NULL AUTO_INCREMENT,
  `public_id` VARCHAR(36) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `pin` VARCHAR(255) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `public_id` (`public_id` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_number` (`phone_number` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_iwallet`.`wallets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_iwallet`.`wallets` (
  `wallet_id` BIGINT NOT NULL AUTO_INCREMENT,
  `public_id` VARCHAR(36) NOT NULL,
  `user_id` BIGINT NOT NULL,
  `wallet_number` VARCHAR(100) NOT NULL,
  `balance` DECIMAL(19,4) NOT NULL DEFAULT '0.0000',
  `status` VARCHAR(50) NOT NULL,
  `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`wallet_id`),
  UNIQUE INDEX `public_id` (`public_id` ASC) VISIBLE,
  UNIQUE INDEX `user_id` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `wallet_number` (`wallet_number` ASC) VISIBLE,
  CONSTRAINT `fk_wallets_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_iwallet`.`users` (`user_id`)
    ON DELETE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_iwallet`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_iwallet`.`transactions` (
  `transaction_id` BIGINT NOT NULL AUTO_INCREMENT,
  `public_id` VARCHAR(36) NOT NULL,
  `wallet_id` BIGINT NOT NULL,
  `merchant_id` BIGINT NULL DEFAULT NULL,
  `transaction_type` VARCHAR(50) NOT NULL,
  `amount` DECIMAL(19,4) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  `idempotency_key` VARCHAR(128) NOT NULL,
  `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`transaction_id`),
  UNIQUE INDEX `public_id` (`public_id` ASC) VISIBLE,
  UNIQUE INDEX `idempotency_key` (`idempotency_key` ASC) VISIBLE,
  INDEX `fk_transactions_merchant` (`merchant_id` ASC) VISIBLE,
  INDEX `idx_wallet_created` (`wallet_id` ASC, `created_at` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_merchant`
    FOREIGN KEY (`merchant_id`)
    REFERENCES `db_iwallet`.`merchants` (`merchant_id`)
    ON DELETE RESTRICT,
  CONSTRAINT `fk_transactions_wallet`
    FOREIGN KEY (`wallet_id`)
    REFERENCES `db_iwallet`.`wallets` (`wallet_id`)
    ON DELETE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;