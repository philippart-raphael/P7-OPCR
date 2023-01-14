import { useParams } from "react-router-dom";
import Carrousel from "../../Component/Carrousel/Carrousel";
import { useEffect, useState } from "react";
import { InterfaceLease } from "../../Type/Lease";
import { getLease } from "../../Service/Service";
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
                    <Carrousel key={index} pictures={data!.pictures} title={data!.title} />
                );
            })}
        </>
    );
}
