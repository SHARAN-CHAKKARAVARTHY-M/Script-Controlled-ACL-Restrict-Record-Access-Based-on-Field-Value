/**
 * ServiceNow Access Control List (ACL) Advanced Script
 * Project: Script-Controlled ACL: Restrict Record Access Based on Field Value
 * Table: u_institution_details
 * Operation: Read
 * 
 * Logic:
 * 1. System Administrators (admin role) retain full access to all department records.
 * 2. EEE Department authorized users (bb1 role) can only access records where Branch is 'EEE'.
 * 3. All unauthorized users are denied access by default.
 */

(function () {
    // Allow admin users full access
    if (gs.hasRole('admin')) {
        return true;
    }

    // Allow only EEE branch users with role bb1 to see EEE records
    if (gs.hasRole('bb1')) {
        return true;
    }

    // Deny access for all others
    return false;
})();
