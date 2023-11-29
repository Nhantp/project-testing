package com.example.a0922i1projectmobilephone.entity;


public enum RoleName {
    ADMIN("ROLE_ADMIN"),
    SALE("ROLE_SALE"),
    BUSINESS("ROLE_BUSINESS"),
    STORAGE("ROLE_STORAGE");

    private final String roleName;

    RoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }
}
