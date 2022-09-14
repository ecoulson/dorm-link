export class ListingApproval {
    constructor(
        public readonly id: string,
        public readonly approved: boolean,
        public readonly approverId?: string,
        public readonly approvedAt?: Date
    ) {}
}
