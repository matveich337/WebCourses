User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
        file: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
        }),
    }),
    files: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })),
    addrr: PropTypes.shape({
        main: PropTypes.shape({
            line1: PropTypes.string.isRequired,
            line2: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired
        }),
        alt: PropTypes.shape({
            line1: PropTypes.string.isRequired,
            line2: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired
        }),
    }),
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
            file: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired
            }),
        }),
        files: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
        })),
        addrr: PropTypes.shape({
            main: PropTypes.shape({
                line1: PropTypes.string.isRequired,
                line2: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                zip: PropTypes.number.isRequired
            }),
            alt: PropTypes.shape({
                line1: PropTypes.string.isRequired,
                line2: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                zip: PropTypes.number.isRequired
            }),
        }),
    })),
}

User.defaultProps = {
    avatar: "N/A",
    files: "N/A",
    addrr: "N/A",
    friends: "N/A"
}
