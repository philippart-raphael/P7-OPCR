import { useParams } from "react-router-dom";
import Carrousel from "../../Component/Carrousel/Carrousel";
import { SetStateAction, useEffect, useState } from "react";
import { InterfaceLease } from "../../Type/Lease";
import { getLease } from "../../Service/Service";
import LeaseInfoContainer from "../../Component/LeaseInfoContainer/LeaseInfoContainer";
import Accordion from "../../Component/Accordion/Accordion";
import "./Lease.scss";

export default function Lease(): JSX.Element {
    const [lease, setLease] = useState<InterfaceLease[0]|SetStateAction<any>>(null);
    const { id } = useParams();

    useEffect(() => {
        getLease(id!).then((res) => {
            setLease(res);
        });
    }, [id]);

    return (
        <div>
            {lease && (
                <>
                    <Carrousel pictures={lease!.pictures} title={lease!.title} />
                    <LeaseInfoContainer lease={lease!} />
                    <div className="LeaseAccordion">
                        <Accordion active={false} title="Description" value={lease!.description} valueIsArray={false} txtSizeContent=""/>
                        <Accordion active={false} title="Équipements" value={lease!.equipments} valueIsArray={true} txtSizeContent=""/>
                    </div>
                </>
            )}
        </div>
    );
}
