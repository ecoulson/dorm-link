export class ApprovalAction {
    constructor(
        public readonly listingId: string,
        public readonly landlordId: string,
        public readonly approval: boolean
    ) {}
}
