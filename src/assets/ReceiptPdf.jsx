 import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
    header: { marginBottom: 20 },
    title: { fontSize: 24, fontWeight: "bold", color: "#111" },
    section: { marginBottom: 20 },
    row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
    totalRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, borderTopWidth: 1, borderTopColor: "#EEE", paddingTop: 10 },
    footer: { marginTop: 50, textAlign: "center", color: "#999", fontSize: 9 }
});

const ReceiptPDF = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>RECEIPT</Text>
                    <Text style={{ fontSize: 10, color: "#666" }}>
                        Transaction ID: {data.paymentRef}
                    </Text>
                </View>

                {/* Customer Info */}
                <View style={styles.section}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data.fullName}</Text>
                    <Text>{data.email}</Text>
                </View>

                {/* Order Items */}
                <View style={styles.section}>
                    {data.orderedItems.map((item, idx) => (
                        <View key={idx} style={styles.row}>
                            <Text>{item.name} × {item.quantity}</Text>
                            <Text>₦{item.price.toLocaleString()}</Text>
                        </View>
                    ))}
                </View>

                {/* Payment Summary */}
                <View style={styles.totalRow}>
                    <Text>Total Paid</Text>
                    <Text style={{ fontWeight: "bold", color: "#2E7D32" }}>₦{data.totalAmount.toLocaleString()}</Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text>Thank you for shopping with us.</Text>
                    <Text>{new Date().toLocaleString()}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default ReceiptPDF;