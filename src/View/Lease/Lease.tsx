import { useParams } from "react-router-dom";
import Carrousel from "../../Component/Carrousel/Carrousel";
import { useEffect, useState } from "react";
import { InterfaceLease } from "../../Type/Lease";
import { getLease } from "../../Service/Service";
import LeaseInfoContainer from "../../Component/LeaseInfoContainer/LeaseInfoContainer";
import "./Lease.scss";

export default function Lease(): JSX.Element {
    const [lease, setLease] = useState<InterfaceLease>([]);
    const { id } = useParams();

    useEffect(() => {
        getLease(id!).then((res) => {
            console.log(res);
            setLease(res);
        });
    }, [id]);

    return (
        <>
            {lease.map((data: any, index: number) => {
                return (
                    <div key={`${index}-${Math.random()}`}>
                        <Carrousel key={`Carrousel-${index}-${Math.random()}`} pictures={data!.pictures}
                                   title={data!.title} />
                        <LeaseInfoContainer key={`LeaseInfoContainer-${index + 1}-${Math.random()}`} lease={data!} />
                    </div>
                );
            })}
        </>
    );
}
