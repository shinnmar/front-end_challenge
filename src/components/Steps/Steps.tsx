import React from "react";
import styles from "./Steps.module.scss";
import { useUserContext } from "../../context/UserContext";

const Steps: React.FC = () => {
  const { userData } = useUserContext();
  const currentStep = userData?.step ?? 1;

  const steps = [
    { id: 1, title: "Planes y coberturas" },
    { id: 2, title: "Resumen" },
  ];

  return (
    <div className={styles.steps}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div
            className={`${styles["steps__step"]} 
                            ${
                              step.id === currentStep
                                ? styles["steps__step--active"]
                                : ""
                            }
                        `}
          >
            <span>{step.id}</span>
            <p>{step.title}</p>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`${styles["steps__dashes"]} 
                                ${
                                  currentStep >= step.id
                                    ? styles["steps__dashes--active"]
                                    : ""
                                }
                            `}
            >
              <span>- - - -</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;
