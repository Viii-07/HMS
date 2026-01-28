export const CREDENTIALS = {
    doctor: {
        id: "DOC001",
        password: "doc@123",
        name: "Dr. Smith",
        role: "doctor"
    },
    receptionist: {
        id: "REC001",
        password: "rec@123",
        name: "Receptionist Jane",
        role: "receptionist"
    },
    pharmacy: {
        id: "PHA001",
        password: "pha@123",
        name: "Pharmacist Bob",
        role: "pharmacy"
    },
    staff: {
        id: "STF001",
        password: "stf@123",
        name: "Staff Member Mike",
        role: "staff"
    },
    admin: {
        id: "ADM001",
        password: "admin@123",
        name: "Admin Alice",
        role: "admin"
    }
};

export const authService = {
    login: async (role, id, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = CREDENTIALS[role];

        if (!user) {
            throw new Error("Invalid role selected");
        }

        if (user.id === id && user.password === password) {
            // Return user without password
            const { password, ...safeUser } = user;
            return safeUser;
        }

        throw new Error("Invalid ID or Password");
    },

    logout: async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));
        return true;
    }
};
