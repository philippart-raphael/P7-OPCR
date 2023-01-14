import { Key, useEffect, useState } from "react";
import { getLeases } from "../../Service/Service";
import { InterfaceLease } from "../../Type/Lease";
import "./LeaseCard.scss";
import ImageCover from "../Img/ImageCover/ImageCover";
import { Link } from "react-router-dom";

export default function LeaseCard(): JSX.Element {
    const [leases, setLeases] = useState<InterfaceLease>([]);

    useEffect(() => {
        getLeases().then((res) => {
            setLeases(res!.data);
        });
    }, []);

    return (
        <div className="Lease">
            {leases.map((data: any, index: Key | null | undefined) => {
                return (
                    <Link className="LeaseCard" key={index} to={`location/${data!.id}`}>
                        <ImageCover src={data!.cover} altText={data!.title} imgRadius="10px" />
                        <div className="LeaseCardTitle">{ data!.title }</div>
                    </Link>
                );
            })}
        </div>
    );
}
