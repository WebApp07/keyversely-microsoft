import { DollarSign, Mail, ShoppingBag, WalletCards } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className="grid md:grid-cols-4 gap-4 p-4">
          <div className="space-y-2">
            <ShoppingBag className="w-6 h-6" />
            <div className="text-sm font-bold">Instant Email Delivery</div>
            <div className="text-sm text-muted-foreground">
              License keys delivered within minutes
            </div>
          </div>
          <div className="space-y-2">
            <DollarSign className="w-6 h-6" />
            <div className="text-sm font-bold">7-Day Return Policy</div>
            <div className="text-sm text-muted-foreground">
              Refunds for defective or wrong products
            </div>
          </div>
          <div className="space-y-2">
            <WalletCards className="w-6 h-6" />
            <div className="text-sm font-bold">Secure Payment</div>
            <div className="text-sm text-muted-foreground">
              Credit cards, debit cards, and PayPal
            </div>
          </div>
          <div className="space-y-2">
            <Mail className="w-6 h-6" />
            <div className="text-sm font-bold">Customer Support</div>
            <div className="text-sm text-muted-foreground">
              Mon-Fri, 9 AM - 6 PM EST
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
