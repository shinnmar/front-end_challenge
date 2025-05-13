import React from 'react';
import PlanCard from '../PlanCard/PlanCard';
import type { PlanListProps } from '../../types/plan';
import styles from './PlanList.module.scss';



const PlanList: React.FC<PlanListProps> = ({ plans, onSelectPlan }) => {
    return (
        <div className={styles.planList}>
            {plans.map((plan) => (
                <PlanCard key={plan.id}
                    plan={plan} 
                    onSelect={() => onSelectPlan(plan)} 
                />
            ))}
        </div>
    );
};

export default PlanList;