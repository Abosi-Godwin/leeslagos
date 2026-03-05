import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image
} from "@react-pdf/renderer";

// Create styles (Feels like React Native/Flexbox)
const styles = StyleSheet.create({
    page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottom: 1,
        paddingBottom: 10
    },
    title: { fontSize: 24, fontWeight: "bold", color: "#111" },
    statusBadge: {
        backgroundColor: "#E8F5E9",
        color: "#2E7D32",
        padding: "4 8",
        borderRadius: 4,
        fontSize: 10,
        fontWeight: "bold"
    },
    section: { marginBottom: 20 },
    label: {
        color: "#666",
        fontSize: 10,
        marginBottom: 4,
        textTransform: "uppercase"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingTop: 10,
        borderTop: 1,
        borderTopColor: "#EEE"
    },
    footer: { marginTop: 50, textAlign: "center", color: "#999", fontSize: 9 }
});

const ReceiptPDF = ({ data }) => {
    console.log(data);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>RECEIPT</Text>
                        <Text style={{ fontSize: 10, color: "#666" }}>
                            Transaction ID: {data.ref}
                        </Text>
                    </View>
                    <View style={styles.statusBadge}>
                        <Text>SUCCESSFUL</Text>
                    </View>
                </View>

                {/* Customer Info */}
                <View style={styles.section}>
                    <Text style={styles.label}>Billed To</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        {`${data.firstname}  ${data.lastname}`}
                    </Text>
                    <Text>{data.email}</Text>
                </View>

                {/* Details Table */}
                <View style={styles.section}>
                    <Text style={styles.label}>Order Summary</Text>
                    {data?.metadata.cartItems.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text>
                                {item.name} x {item.quantity}
                            </Text>
                            <Text>${item.price.toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                {/* Total */}
                <View style={styles.totalRow}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Total Amount
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#2E7D32"
                        }}
                    >
                        ${data.total.toFixed(2)}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text>
                        Thank you for choosing Our App. This is a
                        computer-generated receipt.
                    </Text>
                    <Text>{new Date().toLocaleString()}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default ReceiptPDF;
