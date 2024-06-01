import CardTable from "../../HOC/CardTable";
import { getMissingRentals } from "../../api/missingItems";
import CardContainer from "../../shared/components/UIElements/CardContainer";

export default function MissingItems() {
  return (
    <CardContainer className="col-span-2">
      <CardTable
        headers={{
          name: "Missing Items",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADsElEQVR4nO2XX2xTVRzHD9JzTmddYPznRR4M6rZ2wWDbdW3XdR2yZRIeSEwgRB+UF3zCByD+iVEfNGpi/POkyUCTLbgXH1xuz7lVRjSakJiYkBiUmExA0Kj4RABl53zNvaUdLOvt7V1H78z9Jt+X9eXzOed3fu0ICRIkSJD/bSDYw1bJcowy+Wva5LCqJH+FLKdAhBLK5LNVAZMriHAfWQ7BNAkpk39fga9KCH4G3xFK/B6Y7Mh8eC3LhWSHiZ+DL8NblMmvzgevVAl+DQZ/gPg1SvKpWvDlMihBBfFjUKL76sFXCpPuJX4KSmSVkuySG/hbt/A7pkgH8UuUZB+5ha9KSPYh8UNQCmeU5LoR+PItMA3B862FnyRMSf7DfPBfJlZjdDiPQqGAfD6P4R1Z/HqifYFboD/CILx1ApK9tNCpnxnbgKGhoarAwMAAzh5fs+BNQLIXWwNvsq1K8OsLjcxPn6y14QcHB22BXC6HmfFVtd7CjZb84FOSlWrN+8zE6iq8dfqWwOXJ+5zewymArLhr8JDhp5we6+XJ9jvg+/v78fdnEcdHDUGfvDvwpfa1SrI/nDaNBXs7fDabxbWpNuetVGR/wSDrl1xACXa83pq8+nnbHfDZbAazoja8tj4T9igdW1J4mOGcEtbOd4CRDLOCV+EzmQwGB1KO4LoiUGQaBi8sDbxBuJL8bD34SvO5tA2fTqcxMpSoC6+rEvQcpkm46QJK8FfdwlvdWUiir68PqVQKu3dudwWv5ySa+y8oiuwha183IvD4jkdt+N7eXjwxus01vC6/hX9gsK7mwIOsUJKebATe6p6RR5BMJpFIJLB/d9Q1vJ6T+Kop3w0Q9ECj8Fb37YohHo/bfXpPZ0Pw+lZRpM8sDn6arFOC/elF4OQ76/H+c1vw3qH78fW7azwJqCK7gi8iGz0LKMEmvMA3Mu+6rkRo3NvpS/7YYuB/+/RefPzCZhx7fjMunYh4FKB2UVw52hj8t6RNSfqzV/jz4xGkk1H09PTYTcW77b95gdeCQonQDCSJuBZQkr6xmLEZO7oRsVgM0WjUbnd3N8aObvAErysSRfq6u9Mv0ZgS7N/FzHzprQ4b2mpXVxc6Ozsh3+zwDK8tAYPexBTd5gz/MrlHSfZNMx7sB4c2IR1/EKntW/H2s5usjeINvjhXZdDTFmNtARk62IpNo2uc+u3wlcIIHXSa/Qt+htf2LYTOOwlc9DO8LgtccBghNuJKooXwECuHHR9ykCBBggQhDeQ/jf+mZ5rup3gAAAAASUVORK5CYII=",
        }}
        type="table"
        values={getMissingRentals()}
      />
    </CardContainer>
  );
}
