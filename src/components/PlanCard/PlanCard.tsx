import React from "react";
import styles from "./PlanCard.module.scss";
import type { Plan } from "../../types/plan";
import Card from "../Shared/Card";
import Button from "../Shared/Button";

const PlanCard: React.FC<{ plan: Plan; onSelect: () => void }> = ({
  plan,
  onSelect,
}) => {
  const { description, name, price, recommended } = plan;

  return (
    <div className={styles.planCard}>
      <Card className={styles.planCard__cardCustom}>
        <div className={styles["planCard__wrapper"]}>
          <div className={styles["planCard__content"]}>
            {recommended && (
              <span className={styles["planCard__tag"]}>Plan recomendado</span>
            )}

            <div className={styles["planCard__header"]}>
              <h3>{name}</h3>
              <img
                src={
                  recommended
                    ? "/assets/icons/icon_clinic_home.svg"
                    : "/assets/icons/icon_home.svg"
                }
                alt="icon"
              />
            </div>

            <span className={styles["planCard__planPrice"]}>
              Costo del plan
            </span>
            <span className={styles["planCard__price"]}>
              ${price} al mes
            </span>

            <ul>
              {description.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <Button
            onClick={onSelect}
            variant="red"
            className={styles.planCard__button}
          >
            Seleccionar Plan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PlanCard;
