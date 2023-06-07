import { useParams } from "react-router-dom";
import ListPosts from "../components/listPosts";

const SubCategoria = () => {
    const subcategoria = useParams();
    return (
        <ListPosts url={`posts?subcagtegoria=${subcategoria}`}/>
    )
}

export default SubCategoria