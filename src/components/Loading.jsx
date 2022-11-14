import CircleLoader from "react-spinners/CircleLoader";

export default function Loading() {

    return(
        <div style={{
            display:"flex",
            background: "#c7d2c4",
            height: "100vh",
            textAlign: "center",
            justifyContent:"center",
            alignItems:"center",
            width: "100%",
        }}>
            <CircleLoader
            size={150}
            color="#296e40"
            aria-label="Loading Spinner"
            data-testid="loader"
      />
        </div>
    )
}